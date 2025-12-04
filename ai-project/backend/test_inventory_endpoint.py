"""Test script to verify inventory endpoints are working"""
import requests
import json

BASE_URL = "http://localhost:8000"

def test_endpoints():
    print("Testing backend endpoints...")
    
    # Test root endpoint
    try:
        response = requests.get(f"{BASE_URL}/")
        print(f"✓ Root endpoint: {response.status_code} - {response.json()}")
    except Exception as e:
        print(f"✗ Cannot connect to backend: {e}")
        print("Make sure the backend server is running with: uvicorn app.main:app --reload")
        return
    
    # Test if inventory endpoint exists (will fail auth but should not be 404)
    try:
        response = requests.get(f"{BASE_URL}/api/inventory")
        print(f"Inventory endpoint status: {response.status_code}")
        if response.status_code == 404:
            print("✗ Inventory endpoint not found (404)")
        elif response.status_code == 401:
            print("✓ Inventory endpoint exists (401 - auth required, which is expected)")
        else:
            print(f"Inventory endpoint response: {response.status_code} - {response.text[:100]}")
    except Exception as e:
        print(f"✗ Error testing inventory endpoint: {e}")
    
    # List all available routes
    try:
        response = requests.get(f"{BASE_URL}/openapi.json")
        if response.status_code == 200:
            openapi = response.json()
            paths = list(openapi.get("paths", {}).keys())
            inventory_paths = [p for p in paths if "inventory" in p]
            print(f"\nAvailable inventory paths: {inventory_paths}")
            print(f"All API paths: {[p for p in paths if p.startswith('/api')]}")
    except Exception as e:
        print(f"Could not fetch OpenAPI spec: {e}")

if __name__ == "__main__":
    test_endpoints()

