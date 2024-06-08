本リポジトリは、LINE、Google API (YouTube)、X APIなど複数のAPIを統合し、AI機能 (Gemini API, OpenAI API, RAG) を活用したワークフローシステム、チャットボット、RAGベースのオンラインデータベースを提供する最小可動プロダクトです。

## 機能

* ノードベースのワークフロー構築
* YAML形式でのワークフロー定義
* 複数のAPI連携 (LINE、YouTube、X)
* RAGを用いた情報検索
* 外部知識のembedding
* 5つのチャットボット搭載
* ローコード開発環境
* APIドキュメントの自動生成
* APIキー管理機能

## 実行方法

1. 環境変数を設定します。
   * `OPENAI_API_KEY`: OpenAI APIキー
   * `GEMINI_API_KEY`: Gemini APIキー
   * `HAGGINGFACE_API_KEY`: Haggingface APIキー
   * `LINE_CHANNEL_ACCESS_TOKEN`: LINE Channel Access Token
   * `LINE_CHANNEL_SECRET`: LINE Channel Secret
   * `NOTION_AUTH_TOKEN`: Notion Authentication Token
   * `MONGODB_URI`: MongoDB URI
   * `YOUTUBE_API_KEY`: YouTube APIキー
   * `TWITTER_BEARER_TOKEN`: Twitter Bearer Token
2. `docker-compose up -d` を実行します。

## 使用方法

* [usermanual.md](usermanual.md) を参照してください。

## 開発環境

* Node.js (v18)
* TypeScript
* Docker
* MongoDB

## 依存関係

* @line/bot-sdk
* openai
* google-api-nodejs-client
* x-api-v2
* notion-client
* js-yaml
* kuromoji
* d3-js
* React
* ...
License
GPL 2.0
