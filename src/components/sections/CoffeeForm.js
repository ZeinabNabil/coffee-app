import React from "react";
import { Button, Form } from "react-bootstrap";
import style from "../../css/sections/AboutUS.module.css";

const CoffeeForm = ({ types, selection, btnName, options, onSubmit }) => {
  const inputTypes = types;
  const selectOptions = options;

  console.log(inputTypes);
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3">
        {inputTypes.length <= 0
          ? null
          : inputTypes.map((inputType) => {
              return (
                <>
                  {!inputType.labelName ? (
                    <Form.Control
                      type={inputType.typeName}
                      placeholder={inputType.placeholder}
                      id={inputType.typeId}
                      name={inputType.nameOfType}
                      onChange={inputType.onChange}
                      value={inputType.typeValue}
                    />
                  ) : (
                    <>
                      <Form.Label>{inputType.labelName}</Form.Label>
                      <Form.Control
                        required
                        type={inputType.typeName}
                        placeholder={inputType.placeholder}
                        id={inputType.typeId}
                        name={inputType.nameOfType}
                        onChange={inputType.onChange}
                        value={inputType.typeValue}
                      />
                    </>
                  )}
                </>
              );
            })}
        {!selection ? null : (
          <Form.Select>
            {selectOptions.map((option) => (
              <option>{option}</option>
            ))}
          </Form.Select>
        )}
      </Form.Group>
      <Button variant="primary" type="submit">
        {btnName}
      </Button>
    </Form>
  );
};

export default CoffeeForm;
