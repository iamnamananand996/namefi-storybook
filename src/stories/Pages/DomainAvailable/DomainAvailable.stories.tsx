import type { Meta, StoryObj } from '@storybook/react';
// import { within, userEvent, expect } from '@storybook/test';

import {FullPage as FullPageComponent} from './FullPage';
import '../../../index.css'
import '../../../App.css'

const meta = {
  title: 'Pages/DomainAvailable/FullPage',
  component: FullPageComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FullPageComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullPage: Story = {
  args: {
    pageLayoutProps: {
      headerProps: {
        includeSearchBar: true,
        headerSearchProps: {
          placeholderText: 'Search another domain'
        }
      },
      children: null
    },
    domainAvailableProps: {
      
      domainCardProps: {
        domainName: 'namefi.io'
      },
      registerFormProps:{
        years:1,
        price: 71,
        onRegisterClicked: ()=>{},
        onYearsChanged: ()=>{},
        userAddress: '',
        buttonProps: {
          label: '',
          onClick: () => {}
        }
      },
    }
  }
}