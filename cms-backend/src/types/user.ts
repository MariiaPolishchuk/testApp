// types/user.ts
export interface User {
    id: string;
    displayName?: string;
    email?: string;
    isAdmin?: boolean; // Убедитесь, что это свойство включено
    [key: string]: any; // Для дополнительных свойств
  }
  