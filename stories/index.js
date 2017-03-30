import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
// import { configure, setAddon } from '@kadira/storybook';
// import infoAddon from '@kadira/react-storybook-addon-info';
// .addWithHOC(
// 
// 
import Button from './Button'
import Welcome from './Welcome'
import BlogPost from '../src/components/BlogPost/BlogPost'
import ButtonClose from './ButtonClose'
import formresults from './components/formresults'
import intro from './components/intro'
import locationregion from './locationregion'
import location from './components/location'
import ModalFade from './ModalFade'
import selectdistrict from './components/selectdistrict'
import selectsreet from './components/selectstreet'
import testtype from './components/testtype'
import selectlocation from './components/selectlocation'
// TODO AUTO IMPORT AND AUTO add to storiesOf based on file in directory
import Body from './components/Body.js'


// import withState from 'recompose/withState';


storiesOf('Body', module)
  .add('Test ', () => (
    <Body/>
  ))
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
    <location> location </location> 
  ))

storiesOf('ModalFade', module)
  .add('basic', () => (
    <ModalFade> modal fade </ModalFade>
))
storiesOf('selectdistrict', module)
  .add('basic', () => (
    <selectdistrict> selectdistrict </selectdistrict>
  ))
storiesOf('selectlocation', module)
  .add('basic', () => (
    <selectlocation> selectlocation </selectlocation>
  )) 
storiesOf('selectstreet', module)
  .add('basic', () => (
    <selectstreet> selectstreet </selectstreet>
  ))  
storiesOf('testtype', module)
  .add('basic', () => (
    <testtype asd='s' > testtype </testtype>
  )) 
