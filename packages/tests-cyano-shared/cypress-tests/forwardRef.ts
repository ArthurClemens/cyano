import { a, cast, Component, getRef, h, useState } from 'cyano';

type InputProps = {
  setRef: (dom: Element) => void;
};

const _Input = ({ setRef }: InputProps) => {
  const [domElement, setDomElement] = useState<Element>();
  const [value, setValue] = useState('some input');

  return h(
    'div',
    {
      'data-test-id': 'component-input',
    },
    [
      h('input', {
        key: 'input',
        'data-test-id': 'input',
        value,
        [a.onchange]: (e: InputEvent) =>
          setValue((e.target as HTMLInputElement).value),
        [a.oninput]: (e: InputEvent) =>
          setValue((e.target as HTMLInputElement).value),
        ...getRef((dom: Element) => {
          if (dom && !domElement) {
            setDomElement(dom);
            if (setRef) {
              // pass back to parent
              setRef(dom);
            }
          }
        }),
      }),
      h(
        'p',
        {
          key: 'label',
          'data-test-id': 'feedback',
        },
        value,
      ),
      h(
        'p',
        {
          key: 'feedback',
        },
        [
          h(
            'span',
            {
              key: 'label',
            },
            'input ref: ',
          ),
          h(
            'span',
            {
              key: 'domElement',
              'data-test-id': 'domElement',
            },
            domElement && domElement.getAttribute('data-test-id'),
          ),
        ],
      ),
    ],
  );
};

type ForwardRefProps = {
  Input: Component<InputProps>;
};

const _ForwardRef = ({ Input }: ForwardRefProps) => {
  const [domElement, setDomElement] = useState<Element>();

  return h(
    'div',
    {
      'data-test-id': 'component-parent',
    },
    [
      h(Input, {
        key: 'parent',
        setRef: (dom: Element) => setDomElement(dom),
      }),
      h(
        'p',
        {
          key: 'feedback',
        },
        [
          h(
            'span',
            {
              key: 'label',
            },
            'Parent ref: ',
          ),
          h(
            'span',
            {
              key: 'domElement',
              'data-test-id': 'domElement',
            },
            domElement && domElement.getAttribute('data-test-id'),
          ),
        ],
      ),
    ],
  );
};

const Input = cast(_Input);

export default cast(_ForwardRef, { Input });
