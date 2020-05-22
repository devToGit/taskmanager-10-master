import {createElement} from '../utils';

const createFilterMarkup = (filter, isCheked) => {
  const {name, count} = filter;
  return (
    `<input
          type="radio"
          id="filter__${name}"
          class="filter__input visually-hidden"
          name="filter"
          ${isCheked ? `checked` : ``}
      />
      <label for="filter__${name}" class="filter__label">
        ${name} <span class="filter__${count}--count">${count}</span>
      </label>`
  );
};

const createFilterTemplate = (filters) => {
  const filterMarkup = filters.map((it, i) => createFilterMarkup(it, i === 0)).join(`\n`);

  return (
    `<section class="main__filter filter container">
      ${filterMarkup}
    </section>`
  );
};

export default class Filter {
  constructor(filters) {
    this.filters = filters;
    this._element = null;
  }

  getTemplate() {
    return createFilterTemplate(this._filters);
  }

  getElement() {
    if (!this.element) {
      this._element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this._element = null;
  }

}
