import { userTP } from '@/services/auth/AuthRequests'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface UserStore {
    user: userTP | null
    setUser: (user: userTP)=> void
    clearUser: ()=> void
}

export const useUserStore = create<UserStore>()(
    persist(
        (set)=>  ({

            user: null,
            setUser:(newUser) => set({user: newUser}),
            clearUser: ()=> set({user: null})
        }),
        {
            name: 'user-storage',
            storage: createJSONStorage(()=> localStorage),
        }  
    )
)

