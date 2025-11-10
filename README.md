# 📘 UTS Web Service Engineering – 2025

**Nama:** Husin Nafarin Ramadhani
**NIM:** 230104040122  
**Kelas:** Teknologi Informasi  
**Mata Kuliah:** Web Service Engineering  
**Dosen Pengampu:** Muhayat, M.IT  
**Tanggal:** 10 November 2025  

---

## 🚀 Deskripsi Proyek

Proyek ini merupakan implementasi **RESTful API** menggunakan **Node.js + Express.js** dengan resource **`books`**, sesuai digit akhir NIM (**2 = books**).  
API ini mendukung operasi **CRUD (Create, Read, Update, Delete)** dengan format **JSON** dan menerapkan **7 prinsip RESTful API**.

---

## 🧱 Struktur Folder

```
UTS-WSE-230104040122/
│
├── app.js
├── package.json
│
├── controllers/
│   └── booksController.js
│
├── routes/
│   └── booksRoutes.js
│
└── data/
    └── booksData.js
```

---

## ⚙️ Teknologi yang Digunakan

- Node.js  
- Express.js  
- Nodemon (untuk development server)  
- JSON (untuk data dummy & response)

---

## 📚 Resource: `books`

### 🔑 Field Utama
| Field | Deskripsi | Tipe |
|-------|------------|------|
| id | ID unik buku | Number |
| title | Judul buku | String |
| author | Penulis buku | String |
| year | Tahun terbit | Number |

---

## 🧩 Endpoint API

| Method | Endpoint | Deskripsi | Status Code |
|--------|-----------|------------|--------------|
| GET | `/api/books` | Ambil semua buku | 200 |
| GET | `/api/books/:id` | Ambil buku berdasarkan ID | 200 / 404 |
| POST | `/api/books` | Tambah buku baru | 201 / 400 |
| PUT | `/api/books/:id` | Perbarui data buku | 200 / 400 / 404 |
| DELETE | `/api/books/:id` | Hapus buku | 204 / 404 |
| GET | `/api/info` | Informasi API | 200 |

---

## 🧪 Contoh Uji dengan Postman

### 📘 GET `/api/books`
Mengambil semua data buku.

**Response:**
```json
{
  "status": "success",
  "data": [
    { "id": 1, "title": "Clean Code", "author": "Robert C. Martin", "year": 2008 },
    { "id": 2, "title": "The Pragmatic Programmer", "author": "Andrew Hunt", "year": 1999 }
  ]
}
```

---

### 📗 POST `/api/books`
Menambahkan buku baru.

**Body (JSON):**
```json
{
  "title": "JavaScript: The Good Parts",
  "author": "Douglas Crockford",
  "year": 2008
}
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "id": 3,
    "title": "JavaScript: The Good Parts",
    "author": "Douglas Crockford",
    "year": 2008
  }
}
```

---

### 📙 PUT `/api/books/1`
Memperbarui data buku.

**Body (JSON):**
```json
{
  "title": "Clean Code - Updated Edition",
  "author": "Robert C. Martin",
  "year": 2020
}
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "id": 1,
    "title": "Clean Code - Updated Edition",
    "author": "Robert C. Martin",
    "year": 2020
  }
}
```

---

### 📕 DELETE `/api/books/2`
Menghapus buku dengan ID 2.  
**Response:** `204 No Content`

---

### 📒 GET `/api/info`
Menampilkan informasi tentang API.

**Response:**
```json
{
  "status": "success",
  "service": "Books API - UTS Web Service Engineering",
  "author": "Husin (230104040122)",
  "resource": "books",
  "principles": 7
}
```

---

## ✅ 7 Prinsip RESTful yang Diterapkan

| No | Prinsip | Implementasi |
|----|----------|---------------|
| 1 | Resource-Oriented URI | `/api/books` menggunakan kata benda jamak |
| 2 | Proper HTTP Methods | GET, POST, PUT, DELETE sesuai standar |
| 3 | Stateless Communication | Tidak ada session atau state di server |
| 4 | Consistent Status Codes | 200, 201, 204, 400, 404 digunakan sesuai konteks |
| 5 | JSON Representation | Semua response dalam format JSON |
| 6 | Validation & Error Handling | Cek field wajib `title`, `author` |
| 7 | Discoverability | Endpoint `/api/info` disediakan sebagai metadata service |

---

## 📷 Screenshot Uji CRUD di Postman

1. GET `/api/books`  
2. GET `/api/books/:id`  
3. POST `/api/books`  
4. PUT `/api/books/:id`  
5. DELETE `/api/books/:id`  
6. GET `/api/info`

*(Disertakan sebagai bukti hasil uji di laporan UTS)*

---

## 🏁 Cara Menjalankan Proyek

1. Buka folder proyek:
   ```bash
   cd UTS-WSE-230104040122
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Jalankan server:
   ```bash
   npm run dev
   ```
4. Buka di browser/Postman:
   ```
   http://localhost:3000/api/books
   ```

---

## 👨‍💻 Identitas

**Nama:** Husin Nafarin Ramadhani 
**NIM:** 230104040122  
**Resource:** `/api/books`  
**Project:** UTS-WSE-230104040122  
**Dosen Pengampu:** Muhayat, M.IT  

---

🟢 *Proyek ini dibuat untuk memenuhi tugas Ujian Tengah Semester (UTS) mata kuliah Web Service Engineering – Semester Ganjil 20251.*
