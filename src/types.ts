export interface IFood {
    image: string,
    name: string,
    price: string,
    description: string,
    available: boolean
  }
  
  export interface IFoodID extends IFood {
    id: number;
  }

  export interface IEditProps {
    isOpen: boolean;
    setIsOpen: () => void;
    editingFood: IFoodID;
    handleUpdateFood: (food: IFood) => Promise<void>;
  }

  export interface IAddProps {
    isOpen: boolean;
    setIsOpen: () => void;
    handleAddFood: (food: IFood) => Promise<void>;
  }