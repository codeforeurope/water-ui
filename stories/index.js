import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import Button from './Button'
import Welcome from './Welcome'
import BlogPost from '../src/components/BlogPost/BlogPost'
import ButtonClose from './ButtonClose'
import formresults from './formresults'
import intro from './intro'
import locationregion from './locationregion'
import location from './location'
import ModalFade from './ModalFade'
import selectdistrict from './selectdistrict'
import selectstreet from './selectstreet'
import testtype from './testtype'
import selectlocation from './selectlocation'
//TODO AUTO IMPORT AND AUTO add to storiesOf based on file in directory

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')} />
  ))

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ))

storiesOf('BlogPost', module)
  .add('basic', () => (
    <BlogPost post={{ id: 1, title: 'Post Title' }} comments={[]} />
  ))

storiesOf('ButtonClose', module)
  .add('x', () => (
    <ButtonClose>test </ButtonClose>
  ))

storiesOf('formresults', module)
  .add('xa', () => (
    <formresults> test </formresults>
  ))

storiesOf('intro', module)
  .add('xb', () => (
    <intro> intro </intro>
  ))

storiesOf('locationregion', module)
  .add('xc', () => (
    <locationregion> locationregion </locationregion>
  ))
storiesOf('location', module)
  .add('basic', () => (
    <location />
  ))

storiesOf('ModalFade', module)
  .add('basic', () => (
    <ModalFade />
))
storiesOf('selectdistrict', module)
  .add('basic', () => (
    <selectdistrict />
  ))
storiesOf('selectlocation', module)
  .add('basic', () => (
    <selectlocation />
  )) 
storiesOf('selectstreet', module)
  .add('basic', () => (
    <selectstreet />
  ))  
storiesOf('testtype', module)
  .add('basic', () => (
    <testtype asd='s' />
  )) 