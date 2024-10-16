import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type userStoreTP ={
    name: string
    email: string
    accessToken: string
}

interface UserStore {
    user: userStoreTP | null
    setUser: (user: userStoreTP)=> void
    clearUser: ()=> void
}

export const useUserStore = create<UserStore>()(
    persist(
        (set)=>  ({

            user: null,
            setUser:(user) => set({user: user}),
            clearUser: ()=> set({user: null})
        }),
        {
            name: 'user-storage',
            storage: createJSONStorage(()=> localStorage),
        }  
    )
)