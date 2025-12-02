import { useState } from 'react'

function ShoppingList() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [items, setItems] = useState([
    { id: 1, name: 'Whole Wheat Bread', quantity: '1 loaf', checked: false },
    { id: 2, name: 'Avocados', quantity: '3 ripe', checked: false },
    { id: 3, name: 'Chicken Breasts', quantity: '2 lbs', checked: true },
    { id: 4, name: 'Broccoli', quantity: '1 head', checked: false },
    { id: 5, name: 'Brown Rice', quantity: '1 bag (2 lbs)', checked: false },
    { id: 6, name: 'Cherry Tomatoes', quantity: '1 pint', checked: false },
  ])

  const [selectAll, setSelectAll] = useState(false)

  const handleItemToggle = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ))
  }

  const handleSelectAll = () => {
    const newState = !selectAll
    setSelectAll(newState)
    setItems(items.map(item => ({ ...item, checked: newState })))
  }

  const handleDownloadPDF = () => {
    console.log('Downloading PDF...')
  }

  const handleAddToInventory = () => {
    const selectedItems = items.filter(item => item.checked)
    console.log('Adding to inventory:', selectedItems)
  }

  return (
    <div className="shopping-list-page">
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
            <a href="/inventory" className="app-nav-link">Inventory</a>
            <a href="/shopping-list" className="app-nav-link active">Shopping List</a>
          </div>
          
          <div className="app-nav-right">
            <button className="notification-btn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
            </button>
            <div className="user-avatar">
              <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=100&auto=format&fit=crop" alt="User" />
            </div>
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
            <a href="/inventory" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Inventory</a>
            <a href="/shopping-list" className="mobile-menu-link active" onClick={() => setMobileMenuOpen(false)}>Shopping List</a>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="shopping-list-content">
        <div className="shopping-list-container">
          {/* Back Button */}
          <a href="/" className="back-to-home-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Home
          </a>

          {/* Header Section */}
          <div className="shopping-list-header">
            <div className="shopping-list-header-left">
              <h1 className="shopping-list-title">Your Shopping List</h1>
              <p className="shopping-list-subtitle">
                Generated from your latest meal plan.
              </p>
            </div>
            <button className="download-pdf-btn" onClick={handleDownloadPDF}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download as PDF
            </button>
          </div>

          {/* Shopping List Items */}
          <div className="shopping-list-items">
            {/* Select All Header */}
            <div className="shopping-list-item-header">
              <label className="checkbox-label header-checkbox">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="custom-checkbox"
                />
                <span className="checkbox-custom"></span>
                <span className="item-header-text">ITEM ({items.length})</span>
              </label>
            </div>

            {/* Individual Items */}
            {items.map((item) => (
              <div key={item.id} className={`shopping-list-item ${item.checked ? 'checked' : ''}`}>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleItemToggle(item.id)}
                    className="custom-checkbox"
                  />
                  <span className={`checkbox-custom ${item.checked ? 'checked' : ''}`}>
                    {item.checked && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    )}
                  </span>
                  <div className="item-details">
                    <span className={`item-name ${item.checked ? 'strikethrough' : ''}`}>
                      {item.name}
                    </span>
                    <span className="item-quantity">{item.quantity}</span>
                  </div>
                </label>
              </div>
            ))}
          </div>

          {/* Add to Inventory Button */}
          <div className="shopping-list-actions">
            <button className="add-to-inventory-btn" onClick={handleAddToInventory}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              Add Selected to Inventory
            </button>
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
    </div>
  )
}

export default ShoppingList

