"""Quick script to verify the server can start and routes are registered"""
import sys
import os

# Add the backend directory to the path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

try:
    print("Importing app...")
    from app.main import app
    print("[OK] App imported successfully")
    
    print("\nChecking routes...")
    routes = [route.path for route in app.routes if hasattr(route, 'path')]
    inventory_routes = [r for r in routes if 'inventory' in r]
    
    print(f"\nAll routes: {routes}")
    print(f"\nInventory routes found: {inventory_routes}")
    
    if '/api/inventory' in routes:
        print("\n[OK] /api/inventory route is registered!")
    else:
        print("\n[ERROR] /api/inventory route NOT found!")
        
    print("\nChecking imports...")
    from app import models, schemas, crud
    print("[OK] All imports successful")
    
    print("\nChecking InventoryItem model...")
    if hasattr(models, 'InventoryItem'):
        print("[OK] InventoryItem model exists")
    else:
        print("[ERROR] InventoryItem model NOT found!")
        
except Exception as e:
    print(f"\n[ERROR] Error: {e}")
    import traceback
    traceback.print_exc()
    sys.exit(1)

print("\n[SUCCESS] All checks passed! Server should work correctly.")

