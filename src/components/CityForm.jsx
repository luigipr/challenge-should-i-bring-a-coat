import { FormEventHandler } from 'react';
import { Button } from './Button';
import { Input } from './Input';
import styled from 'styled-components';

export function CityForm({ loading, onSubmit }) {
  return (
    <Form onSubmit={onSubmit}>
      <Input name="cidade" type="text" placeholder="Digite o local..." />
      <Button disabled={loading} type="submit">Buscar</Button>
    </Form>
  );
}

export const Form = styled.form`
  display: flex;
  max-width: 400px;
`;