import { useState } from 'react'
import UserMenu from './UserMenu'

function Inventory() {
  const [searchQuery, setSearchQuery] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showAddModal, setShowAddModal] = useState(false)
  const [newItem, setNewItem] = useState({
    name: '',
    quantity: '',
    category: 'Pantry'
  })
  const [items, setItems] = useState([
    { id: 1, name: 'Organic Avocados', quantity: '2', stocked: '2 days ago' },
    { id: 2, name: 'Sourdough Bread', quantity: '1 loaf', stocked: '1 day ago' },
    { id: 3, name: 'Cherry Tomatoes', quantity: '1 pint', stocked: '4 days ago' },
    { id: 4, name: 'Free-Range Eggs', quantity: '8 remaining', stocked: '5 days ago' },
    { id: 5, name: 'Milk (2%)', quantity: '0.5 gallon', stocked: '3 days ago' },
  ])

  const handleVoiceInput = () => {
    console.log('Voice input activated')
  }

  const handleAddItem = () => {
    setShowAddModal(true)
  }

  const handleCloseModal = () => {
    setShowAddModal(false)
    setNewItem({ name: '', quantity: '', category: 'Pantry' })
  }

  const handleSubmitItem = (e) => {
    e.preventDefault()
    if (newItem.name && newItem.quantity) {
      const newItemEntry = {
        id: items.length + 1,
        name: newItem.name,
        quantity: newItem.quantity,
        stocked: 'Just now'
      }
      setItems([newItemEntry, ...items])
      handleCloseModal()
    }
  }

  const handleInputChange = (e) => {
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="inventory-page">
      {/* Navigation Bar */}
      <nav className="app-navbar">
        <div className="app-nav-container">
          <div className="app-nav-left">
            <a href="/" className="app-logo">
              <div className="app-logo-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"/>
                </svg>
              </div>
              <span className="app-logo-text">Smart Kitchen</span>
            </a>
          </div>
          
          <div className="app-nav-center">
            <a href="#dashboard" className="app-nav-link">Dashboard</a>
            <a href="/meal-planner" className="app-nav-link">Meal Planner</a>
            <a href="/inventory" className="app-nav-link active">Inventory</a>
            <a href="/shopping-list" className="app-nav-link">Shopping List</a>
          </div>
          
          <div className="app-nav-right">
            <button className="notification-btn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
            </button>
            <UserMenu />
          </div>

          {/* Mobile Hamburger Menu */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <line x1="3" y1="18" x2="21" y2="18"/>
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <a href="#dashboard" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Dashboard</a>
            <a href="/meal-planner" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Meal Planner</a>
            <a href="/inventory" className="mobile-menu-link active" onClick={() => setMobileMenuOpen(false)}>Inventory</a>
            <a href="/shopping-list" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Shopping List</a>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="inventory-content">
        <div className="inventory-container">
          {/* Back Button */}
          <a href="/" className="back-to-home-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Home
          </a>

          {/* Header Section */}
          <div className="inventory-header">
            <div className="inventory-header-left">
              <h1 className="inventory-title">Your Kitchen Inventory</h1>
              <p className="inventory-subtitle">
                Keep track of what you have, reduce waste, and plan meals easily.
              </p>
            </div>
            <button className="add-item-btn" onClick={handleAddItem}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19"/>
                <line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
              Add Item
            </button>
          </div>

          {/* Search Bar */}
          <div className="inventory-search">
            <div className="inventory-search-wrapper">
              <svg className="search-icon-inv" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <line x1="9" y1="3" x2="9" y2="21"/>
              </svg>
              <input
                type="text"
                className="inventory-search-input"
                placeholder="Type to add an item, e.g., '2 avocados' or '1 loaf of bread'"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="voice-input-btn-inv" onClick={handleVoiceInput}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                  <line x1="12" y1="19" x2="12" y2="22"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Inventory Table */}
          <div className="inventory-table-section">
            <div className="inventory-table-header">
              <h2 className="current-stock-title">Current Stock ({items.length} items)</h2>
              <div className="table-controls">
                <button className="table-control-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="4" y1="21" x2="4" y2="14"/>
                    <line x1="4" y1="10" x2="4" y2="3"/>
                    <line x1="12" y1="21" x2="12" y2="12"/>
                    <line x1="12" y1="8" x2="12" y2="3"/>
                    <line x1="20" y1="21" x2="20" y2="16"/>
                    <line x1="20" y1="12" x2="20" y2="3"/>
                    <line x1="1" y1="14" x2="7" y2="14"/>
                    <line x1="9" y1="8" x2="15" y2="8"/>
                    <line x1="17" y1="16" x2="23" y2="16"/>
                  </svg>
                </button>
                <button className="table-control-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <line x1="3" y1="12" x2="21" y2="12"/>
                    <line x1="3" y1="18" x2="21" y2="18"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="inventory-table-wrapper">
              <table className="inventory-table">
                <thead>
                  <tr>
                    <th className="table-header-cell">ITEM NAME</th>
                    <th className="table-header-cell">QUANTITY</th>
                    <th className="table-header-cell">STOCKED</th>
                    <th className="table-header-cell">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id} className="table-row">
                      <td className="table-cell item-name-cell">{item.name}</td>
                      <td className="table-cell">{item.quantity}</td>
                      <td className="table-cell stocked-cell">{item.stocked}</td>
                      <td className="table-cell actions-cell">
                        <button className="action-btn">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <circle cx="12" cy="12" r="1"/>
                            <circle cx="12" cy="5" r="1"/>
                            <circle cx="12" cy="19" r="1"/>
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div className="app-footer-container">
          <p className="app-footer-copyright">© 2024 Smart Kitchen. All rights reserved.</p>
          <div className="app-footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>

      {/* Add Item Modal */}
      {showAddModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Add New Item</h2>
              <button className="modal-close-btn" onClick={handleCloseModal}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmitItem} className="modal-form">
              <div className="form-group">
                <label htmlFor="itemName">Item Name *</label>
                <input
                  type="text"
                  id="itemName"
                  name="name"
                  value={newItem.name}
                  onChange={handleInputChange}
                  placeholder="e.g., Organic Tomatoes"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="quantity">Quantity *</label>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  value={newItem.quantity}
                  onChange={handleInputChange}
                  placeholder="e.g., 2 lbs, 1 gallon, 5 pieces"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select
                  id="category"
                  name="category"
                  value={newItem.category}
                  onChange={handleInputChange}
                >
                  <option value="Pantry">Pantry</option>
                  <option value="Fridge">Fridge</option>
                  <option value="Freezer">Freezer</option>
                  <option value="Produce">Produce</option>
                  <option value="Dairy">Dairy</option>
                  <option value="Meat">Meat</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="modal-actions">
                <button type="button" className="btn-cancel" onClick={handleCloseModal}>
                  Cancel
                </button>
                <button type="submit" className="btn-submit">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                  Add Item
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Inventory

