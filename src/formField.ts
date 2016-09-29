import * as b from 'bobril';
import * as fg from './formGroup';
import * as i from './input';
import * as s from './select';

export interface IValidator {
  validate: <TValue>(value: TValue) => boolean
}

export function input<TValue>(label: string, value: TValue, onChange: (value: TValue) => void, help: string = undefined) {
  return fg.default({
    content: [
      { tag: 'label', children: label },
      i.default({ value: value, onChange: onChange, placeHolder: label }),
    ],
    help: help
  });
}

export function date(label: string, value: Date, onChange: (value: Date) => void, help: string = undefined) {
  return fg.default({
    content: [
      { tag: 'label', children: label },
      i.default({ value: value, onChange: onChange, placeHolder: label, type: i.Type.Date }),
    ],
    help: help
  });
}

export function time(label: string, value: Date, onChange: (value: Date) => void, help: string = undefined) {
  return fg.default({
    content: [
      { tag: 'label', children: label },
      i.default({ value: value, onChange: onChange, placeHolder: label, type: i.Type.Time }),
    ],
    help: help
  });
}

export function dateTime(label: string, value: Date, onChange: (value: Date) => void, help: string = undefined) {
  return fg.default({
    content: [
      { tag: 'label', children: label },
      i.default({ value: value, onChange: onChange, placeHolder: label, type: i.Type.DateTime }),
    ],
    help: help
  });
}


export interface IData {
  label: string
  value: number
  onChange: (value: number) => void
  validatiors?: IValidator[]
}

export interface ICtx extends b.IBobrilCtx {
  data: IData
}

export function numeric(label: string, value: number, onChange: (value: number) => void, validatiors: IValidator[] = [], help: string = undefined) {
  validatiors = [{
    validate: (value: string) => {
      let numeric = parseFloat(value)
      return numeric || numeric === 0 ? true : false;
    }
  }, ...validatiors];
  return b.createComponent<IData>({
    render(ctx: ICtx, me: b.IBobrilNode) {
      me.children = fg.default({
        content: [
          { tag: 'label', children: ctx.data.label },
          i.default({
            value: ctx.data.value,
            onChange: (value: string) => {
              if (isValueInvalid(ctx.data.validatiors, value))
                b.invalidate(ctx);
              else
                ctx.data.onChange(parseFloat(value));
            },
            placeHolder: ctx.data.label
          }),
        ],
        help: help,
        validationState: isValueInvalid(ctx.data.validatiors, ctx.data.value.toString()) && fg.ValidationState.Error
      });
    }
  })({ label: label, value: value, onChange: onChange, validatiors: validatiors });
}

function isValueInvalid(validatiors: IValidator[], value: string): boolean {
  return validatiors.filter(v => !v.validate(value)).length > 0;
}

export function password<TValue>(label: string, value: TValue, onChange: (value: TValue) => void, error: string, shouldHaveFocus: boolean = false, help: string = undefined) {
  return fg.default({
    content: [
      { tag: 'label', children: label },
      i.default({ value: value, onChange: onChange, placeHolder: label, type: i.Type.Password, shouldHaveFocus: shouldHaveFocus }),
    ],
    help: help,
    validationState: error && fg.ValidationState.Error
  });
}

export { IKeyValue } from './select';
export function select(label: string, items: s.IKeyValue<string, string>[], selectedItemKey: string, onChange: s.onChange, isDisabled: boolean = false, help: string = undefined) {
  return fg.default({
    content: [
      { tag: 'label', children: label },
      s.default({ items: items, selectedItem: selectedItemKey, isDisabled: isDisabled, onChange: onChange })
    ],
    help: help
  });
}

export function readOnly(label: string, value: string, help: string = undefined): b.IBobrilNode {
  return fg.default({
    content: [
      { tag: 'label', className: 'control-label', children: label },
      { tag: 'div', children: { tag: 'p', className: 'form-control-static', children: value } }
    ],
    help: help
  });
}
