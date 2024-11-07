import type { Schema, Struct } from '@strapi/strapi';

export interface CardComponentCard extends Struct.ComponentSchema {
  collectionName: 'components_card_component_cards';
  info: {
    description: '';
    displayName: 'card';
  };
  attributes: {
    cardDate: Schema.Attribute.Component<'date-component.card-date', false>;
    description: Schema.Attribute.Text;
    Icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    tag: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DateComponentCardDate extends Struct.ComponentSchema {
  collectionName: 'components_date_component_card_dates';
  info: {
    displayName: 'cardDate';
    icon: '';
  };
  attributes: {
    date: Schema.Attribute.Date;
    time: Schema.Attribute.Time;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'card-component.card': CardComponentCard;
      'date-component.card-date': DateComponentCardDate;
    }
  }
}
