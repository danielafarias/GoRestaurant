import { IconBaseProps } from "react-icons";

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

  export interface IModalProps {
      isOpen: boolean;
      setIsOpen: () => void;
      children: React.ReactNode;
  }

  export interface IInputProps {
      name: string;
      icon?: React.ComponentType<IconBaseProps>;
      placeholder?: string;
  }

  export interface IHeaderProps {
    openModal: () => void;
  }

  export interface IFoodProps {
    key: number;
    food: IFoodID;
    handleDelete: (id: number) => Promise<void>;
    handleEditFood: (food: IFoodID) => void;
  }