# E-Commerce Application

フルスタックのEコマースアプリケーションです。

## プロジェクト構成

- **frontend**: ユーザー向けのフロントエンド (React + Vite)
- **admin**: 管理者ダッシュボード (React + Vite)
- **backend**: Node.js + Express バックエンドAPI

## セットアップ

### 前提条件

- Node.js (v14以上)
- MongoDB
- Cloudinary アカウント (画像管理用)

### インストール

1. リポジトリをクローン

```bash
git clone <your-repository-url>
cd ECOMMERCE-APP
```

2. 各フォルダで依存関係をインストール

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install

# Admin
cd ../admin
npm install
```

3. 環境変数を設定

各フォルダに `.env` ファイルを作成し、必要な環境変数を設定してください。

#### Backend (.env)

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
```

#### Frontend (.env)

```
VITE_BACKEND_URL=http://localhost:4000
```

#### Admin (.env)

```
VITE_BACKEND_URL=http://localhost:4000
```

## 実行方法

各フォルダで別々のターミナルを開き、以下のコマンドを実行：

```bash
# Backend
cd backend
npm run server

# Frontend
cd frontend
npm run dev

# Admin
cd admin
npm run dev
```

## 技術スタック

- **Frontend**: React, Vite, React Router
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **認証**: JWT
- **画像管理**: Cloudinary
- **決済**: Stripe/Razorpay (該当する場合)

## ライセンス

MIT
