// types/index.ts

// 1. Ürün Tipi (Tüm ürün kartlarında kullanılır)
export interface Product {
    id: string;
    brand: string;
    name: string;
    price: number;
    imageUrl: string;
    score?: number;        // ? işareti "olmayabilir" demektir (opsiyonel)
    reviewCount?: number;
    isFastDelivery?: boolean;
    isFreeShipping?: boolean;
    isAdvantageous?: boolean;
}

// 2. Sepet Ürünü Tipi (Cart store ve sepet sayfasında kullanılır)
export interface CartItem {
    docId: string;
    productId: string;
    title: string;
    price: number;
    image: string;
    seller: string;
    quantity: number;
    addedAt?: any;
}

// 3. Kullanıcı Tipi (Auth store'da kullanılır)
export interface User {
    uid: string;
    email: string;
    displayName?: string;
}

// 4. Kategori/Slider Tipi (Category store'da kullanılır)
export interface Category {
    id: string;
    title: string;
    image: string;
} 