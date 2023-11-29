import { Form } from './Form';
import { Input } from './Input';

export function CityForm({ onSubmit }) {
  return (
    <Form onSubmit={onSubmit}>
      <Input name="cidade" type="text" placeholder="&#128270;  Procure por uma cidade" />
    </Form>
  );
}

