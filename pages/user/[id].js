import { useRouter } from 'next/router';

export default function User() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Профіль користувача</h1>
      <p>Ідентифікатор користувача: {id}</p>
    </div>
  );
}