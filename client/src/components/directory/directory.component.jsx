import React from 'react';

import MenuCategory from '../menu-categories/menu-categories.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Food',
          // default path is from public directory
          imageUrl: './assets/fast-food.png',
          size: 'full',
          id: 1
        },
        {
          title: 'Drinks',
          imageUrl: './assets/drinks.png',
          size: 'full',
          id: 2
        },
        {
          title: 'Ice&Chocolate',
          imageUrl: './assets/icecream.png',
          size: 'full',
          id: 3
        },
        {
          title: 'Others',
          imageUrl: './assets/drinks.png',
          size: 'full',
          id: 4
        }
      ]
    };
  }

  render() {
    return (
      <div className="categoryWraper">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (

          <MenuCategory key={id} title={title} imageUrl={imageUrl} size={size} />

        ))}
      </div>
    );
  }
}

export default Directory;
