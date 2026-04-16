// app/page.tsx
import { redirect } from 'next/navigation';

export default function Home() {
  // ホーム画面を表示せず、すぐにプロフィールへ飛ばす
  redirect('/profile');
}