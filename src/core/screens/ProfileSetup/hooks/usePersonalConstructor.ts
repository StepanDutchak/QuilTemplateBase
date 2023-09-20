import {useEffect, useState} from 'react';
import {INPUT} from '../constants';

type ConstructorProp = {
  userData: {
    firstName: string;
    lastName: string;
    email: string;
  };
  handleUpdateParams: (key: string, value: string) => void;
};

export function usePersonalConstructor({
  userData,
  handleUpdateParams,
}: ConstructorProp) {
  const [renderList, setRenderList] = useState<null | object>(null);

  useEffect(() => {
    const block = {
      id: 'Person',
      rows: [
        {
          id: 'firstName',
          type: INPUT,
          isRequired: true,
          headerTitle: 'Name',
          placeholder: 'Your Name',
          value: userData.firstName || '',
          onChange: (value: string) => handleUpdateParams('firstName', value),
        },
        {
          id: 'lastName',
          type: INPUT,
          isRequired: true,
          headerTitle: 'Surname',
          placeholder: 'Your Surname',
          value: userData.lastName || '',
          onChange: (value: string) => handleUpdateParams('lastName', value),
        },
        {
          id: 'email',
          isRequired: true,
          type: INPUT,
          headerTitle: 'E-mail',
          placeholder: 'E-mail',
          value: userData.email || '',
          onChange: (value: string) => handleUpdateParams('email', value),
        },
      ],
    };

    setRenderList(block);
  }, [handleUpdateParams, userData]);

  return renderList;
}
