import { Button } from './Button';
import { Form } from './Form';
import { Input } from './Input';

export function CityForm({ loading, onSubmit }) {
  return (
    <Form onSubmit={onSubmit}>
      <Input name="cidade" type="text" placeholder="Digite o local..." />
      <Button disabled={loading} type="submit">Buscar</Button>
    </Form>
  );
}

