import React from "react";

// Style
import style from "../../css/sections/Sections.module.css";

// React bootstrap
import { Button, Form } from "react-bootstrap";

const CoffeeForm = ({ types, selection, btnName, options, onSubmit }) => {
  const inputTypes = types;
  const selectOptions = options;

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3">
        {inputTypes.length <= 0
          ? null
          : inputTypes.map((inputType, index) => {
              return (
                <span key={index}>
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
                </span>
              );
            })}
        {!selection ? null : (
          <Form.Select>
            {selectOptions.map((option, index) => (
              <option key={index}>{option}</option>
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
