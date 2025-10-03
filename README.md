# 単位変換ツール (TypeScript + React + Storybook)

React 18とTypeScriptで構築された単位変換アプリケーションです。機能別のモジュラーアーキテクチャを採用しています。

## デモプレイ
https://yunbow.github.io/react-app-unit-converter/demo/

## 主要機能

### 単位変換
- **長さの変換**: ミリメートル、センチメートル、メートル、キロメートル、インチ、フィート、ヤード、マイル
- **重さの変換**: ミリグラム、グラム、キログラム、トン、オンス、ポンド
- **温度の変換**: 摂氏、華氏、ケルビン

### その他機能
- リアルタイム変換
- 変換履歴の保存（localStorage）
- 計算式の表示
- タブ切り替えによる変換タイプの選択

## 技術スタック

- **React 18** - UIライブラリ
- **TypeScript** - プログラミング言語
- **Storybook 7** - コンポーネント開発・ドキュメント
- **CSS Modules** - スタイリング
- **Vite** - ビルドツール

## プロジェクト構造

```
src/
├── features/                   # 機能別モジュール
│   └── unit-converter/         # 単位変換機能
│       ├── components/         # 機能専用コンポーネント
│       │   ├── TabButtons/     # タブボタン群
│       │   ├── ConverterSection/ # 変換セクション
│       │   └── HistorySection/ # 履歴セクション
│       ├── UnitConverterApp/   # 機能ルートコンポーネント
│       ├── useHistory.ts       # 履歴管理フック
│       ├── conversion.ts       # 変換ロジック
│       └── types.ts            # 機能固有の型定義
├── components/                 # 共通UIコンポーネント
│   ├── Button/                 # 操作ボタン
│   ├── Input/                  # テキスト入力
│   ├── Select/                 # セレクトボックス
│   └── Text/                   # テキスト表示
├── hooks/                      # 共通フック
│   └── useLocalStorage.ts      # ローカルストレージフック
├── stories/                    # Storybook用ストーリー
├── Config.ts                   # 設定値・定数
├── App.tsx                     # メインアプリ
└── main.tsx                    # エントリーポイント
```

## スクリプト

```bash
# セットアップ
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview

# Storybook起動
npm run storybook

# Storybook ビルド
npm run build-storybook
```

## ライセンス

MIT License