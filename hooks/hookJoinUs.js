import { SchemaJoinUs } from '@/schema/JoinUsSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

export const hookJoinUs = () => {
  const { register , trigger , handleSubmit,formState: { errors }, clearErrors, setError, getValues, setValue , watch, reset } = useForm({ resolver: yupResolver(SchemaJoinUs) });

  const submit = handleSubmit(async data => {
    console.log(data)
  });

  return { register, errors , trigger , clearErrors, setError, getValues, setValue, submit , watch, reset };
};
