# shouten-v2

相場商店ホームページです。
Jekyllを使用した静的サイトです。

## 必要な環境

- Docker
- Docker Compose

## ローカルでの起動方法

### 1. リポジトリをクローン

git clone <repository-url>
cd shouten-v2

### 2. Docker Composeで起動

docker-compose up

### 3. ブラウザでアクセス

起動後、以下のURLでサイトにアクセスできます：

- **サイト**: http://localhost:4000
- **LiveReload**: ポート35729で自動リロード機能が有効

ファイルを編集すると、自動的にブラウザがリロードされます。

### 4. 停止方法

Ctrl+C で停止、または別のターミナルで以下を実行：

docker-compose down

## プロジェクト構成

- `_includes/` - 共通パーツ（ヘッダー、フッターなど）
- `_layouts/` - ページレイアウトテンプレート
- `assets/` - CSS、画像などの静的ファイル
- `_site/` - ビルド後の生成ファイル（Git管理対象外推奨）
- `*.html` - 各ページのコンテンツ
