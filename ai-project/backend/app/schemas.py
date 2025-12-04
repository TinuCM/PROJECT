from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional

class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserRead(BaseModel):
    id: int
    username: str
    email: str
    created_at: datetime

    class Config:
        from_attributes = True

class Token(BaseModel):
    access_token: str
    token_type: str

class InventoryItemCreate(BaseModel):
    name: str
    quantity: str
    category: str = "Pantry"

class InventoryItemRead(BaseModel):
    id: int
    name: str
    quantity: str
    category: str
    user_id: int
    created_at: datetime

    class Config:
        from_attributes = True

class InventoryItemUpdate(BaseModel):
    name: Optional[str] = None
    quantity: Optional[str] = None
    category: Optional[str] = None

