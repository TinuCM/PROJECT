// ProtectedRoute is now a pass-through component
// Authentication checks removed - all pages are accessible
// TODO: Re-implement authentication when backend is integrated
function ProtectedRoute({ children }) {
  return children
}

export default ProtectedRoute

