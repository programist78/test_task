'use client';
import { FC } from 'react';
import { DropdownField } from 'components/common/DropdownField';

import s from './UpdateForm.module.scss';
import { Button } from 'ui/components/Button';

interface UpdateFormProps {
  fields: {
    name: string;
    placeholder: string;
  }[];
  submitLabel: string;
  onUpdate: (formData: any) => void;
  register: any;
  errors: any;
  handleSubmit: any;
}

export const UpdateForm: FC<UpdateFormProps> = ({
  onUpdate,
  fields,
  submitLabel,
  register,
  errors,
  handleSubmit,
}) => {
  return (
    <form className={s.form} onSubmit={handleSubmit(onUpdate)}>
      <div className={s.form_fields}>
        {fields.map((field, index) => {
          return (
            <DropdownField
              register={register}
              errors={errors}
              name={field.name}
              placeholder={field.placeholder}
              key={index}
            >
              design
            </DropdownField>
          );
        })}
        <Button type="submit" className={s.form_submit}>
          {submitLabel}
        </Button>
      </div>
    </form>
  );
};
