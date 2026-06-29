# task-board

Vite + React で構築されたタスク管理ボードアプリ。

## 技術スタック

| カテゴリ | 技術 | バージョン |
|---|---|---|
| UI ライブラリ | React | ^18.3.1 |
| ビルドツール | Vite | ^5.4.2 |
| React プラグイン | @vitejs/plugin-react | ^4.3.1 |
| スタイリング | CSS3（バニラ CSS） | — |
| 言語 | JavaScript (ES6+) / JSX | — |
| 永続化 | localStorage | — |

## プロジェクト構成

```
task-board/
├── index.html                    # エントリーポイント
├── vite.config.js                # Vite 設定（base パス含む）
├── package.json
├── src/
│   ├── main.jsx                  # React ルートマウント
│   ├── App.jsx                   # メインコンポーネント
│   ├── App.css                   # コンポーネントスタイル
│   └── index.css                 # グローバルリセット
├── .github/
│   └── workflows/
│       └── deploy.yml            # GitHub Pages 自動デプロイ
└── CLAUDE.md
```

## コンポーネント命名規約

- **コンポーネントファイル名** — パスカルケース (`App.jsx`, `TaskItem.jsx`)
- **コンポーネント関数名** — パスカルケース (`export default function App()`)
- **CSS クラス名** — BEM 記法を採用
  - ブロック: `.board`, `.task-item`, `.input-row`
  - エレメント: `.board__title`, `.task-item__text`, `.input-row__btn`
  - モディファイア: `.task-item--done`
- **その他のファイル名** — ケバブケース (`vite.config.js`)
- **state / 変数名** — キャメルケース (`tasks`, `nextId`, `loadTasks`)

## 開発ガイドライン

- コンポーネントは `src/` 直下に配置し、肥大化したら `src/components/` へ分割する
- state 管理は React `useState` / `useEffect` で行い、外部ライブラリは導入しない
- CSS はセレクターの詳細度を低く保ち、BEM クラスベースのスタイリングを優先する
- ファイル名はケバブケース、コンポーネント名はパスカルケースで統一する

## ブラウザ対応

モダンブラウザ（Chrome・Firefox・Edge・Safari 最新版）を対象とする。

## デプロイ先

| 項目 | 内容 |
|---|---|
| GitHub リポジトリ | https://github.com/lycorisradiata1619-coder/task-bord.git |
| 公開 URL | https://lycorisradiata1619-coder.github.io/task-bord/ |
| デプロイ方法 | `main` ブランチへのプッシュで GitHub Actions が自動ビルド・デプロイ |
| Vite base パス | `/task-bord/` |

## Git 運用ルール

### 基本方針

**コードを変更するたびに必ず GitHub へプッシュすること。**

### 手順

コードを変更・追加した際は、以下の手順を毎回実行する。

```bash
# 1. 変更内容を確認
git status
git diff

# 2. ステージング
git add <変更ファイル>   # 特定ファイルを指定。git add . は避ける

# 3. コミット
git commit -m "変更内容を簡潔に説明するメッセージ"

# 4. プッシュ（変更のたびに必ず実行）
git push origin main
```

### コミットメッセージ規約

| プレフィックス | 用途 |
|---|---|
| `feat:` | 新機能の追加 |
| `fix:` | バグ修正 |
| `style:` | スタイル変更（機能に影響なし） |
| `refactor:` | リファクタリング |
| `docs:` | ドキュメント変更 |

例: `feat: タスクの追加フォームを実装`

### ブランチ戦略

- `main` — 常に動作する状態を保つ
- 新機能は `feature/<機能名>` ブランチで作業し、完成後に `main` へマージしてプッシュする

### 注意事項

- `.env` や認証情報を含むファイルは絶対にコミットしない
- `git add .` / `git add -A` は意図しないファイルを含む恐れがあるため、ファイルを明示して追加する
- force push (`git push --force`) は原則禁止。必要な場合は事前に確認を取る
