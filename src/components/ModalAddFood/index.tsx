import { useRef } from "react";
import { FiCheckSquare } from "react-icons/fi";

import { Form } from "./styles";
import Modal from "../Modal";
import Input from "../Input";
import { IAddProps, IFood } from "../../types";

function ModalAddFood({ isOpen, setIsOpen, handleAddFood }: IAddProps) {
  const formRef = useRef(null);

  const handleSubmit = async (data: IFood) => {
    handleAddFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input icon="" name="image" placeholder="Cole o link aqui" />

        <Input icon="" name="name" placeholder="Ex: Moda Italiana" />
        <Input icon="" name="price" placeholder="Ex: 19.90" />

        <Input icon="" name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}

export default ModalAddFood;