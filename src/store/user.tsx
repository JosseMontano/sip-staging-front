import { UserType } from '@/interfaces/global/user';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserSatate {
  user: UserType;
  loadUser: (user: UserType) => void;
}

const initialValue: UserType = {
  id: 0,
  city: '',
  country: '',
  email: '',
  gender: '',
  user_name: ''
};

export const UseUser = create(
  persist<UserSatate>(
    (set) => ({
      user: initialValue,
      loadUser: (user: UserType) => {
        set((state: any) => ({
          user:user
        }));
      }
    }),
    {
      name: 'user-infoshop'
    }
  )
);
