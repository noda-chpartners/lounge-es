# Lounge es — プレミアムラウンジ公式ウェブサイト

## 1. Project Description
岩手県北上市にあるプレミアムラウンジ「Lounge es」の公式ウェブサイト。
落ち着いた大人の雰囲気と高級感を演出し、来店を促すための電話予約導線を重視したシングルページ構成。
ピンク系の照明を基調とした暗色系のエレガントなデザインで、ラウンジ特有の洗練された世界観を表現する。

## 2. Page Structure
- `/` — **Home** — ヒーロー、店舗情報、お問い合わせ（電話予約）

## 3. Core Features
- [x] ヒーローセクション（店舗名 Lounge es + 予約CTA）
- [x] 店舗情報セクション（左情報 / 右写真、スマホ対応）
- [x] 料金プランセクション（Standard / Premium / Bottle Plan）
- [x] GoogleMapアクセスセクション（店舗情報→お問い合わせの間）
- [x] お問い合わせセクション（フォームなし、tel:リンクで電話発信）
- [x] フッター（店舗名・住所・電話番号・営業時間）
- [x] レスポンシブ対応（スマホでは縦並び）
- [x] GSAPアニメーション（ScrollTrigger）
- [x] ピンク系配色テーマ

## 4. Data Model Design
Not required — マーケティングサイト、データベースなし。

## 5. Backend / Third-party Integration Plan
- Supabase: Not needed
- Shopify: Not needed
- Stripe: Not needed
- Form service: Not needed（電話番号リンクで代替）
- GSAP: スクロールアニメーション

## 6. Development Phase Plan

### Phase 1: ホームページ完成（current）
- ヒーローセクション（店舗名 Lounge es + 予約CTAボタン）
- 店舗情報セクション（住所・電話・営業時間など、右側に店内写真）
- お問い合わせセクション（電話番号リンク、フォームなし）
- フッター更新
- レスポンシブ対応
- GSAPアニメーション調整
- ピンク系配色テーマ適用