import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import {apply} from '../../theme/styles'

const Button1 = (props) => {
  return (
    <View style={apply('items-center m-2')}>
      <Text style={apply('text-base mb-2')}>Simple Button</Text>
      <View style={apply('flex-row')}>
        <TouchableOpacity style={apply('px-4 py-2 bg-grey-dark rounded mx-2 items-center')}>
          <Text style={apply('text-white')}>Button 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={apply('px-4 py-2 bg-blue rounded mx-2 items-center')}>
          <Text style={apply('text-white')}>Button 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={apply('px-4 py-2 bg-purple rounded mx-2 items-center')}>
          <Text style={apply('text-white')}>Button 1</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Button2 = (props) => {
  return (
    <View style={apply('items-center m-2')}>
      <Text style={apply('text-base mb-2')}>Border Button</Text>
      <View style={apply('flex-row')}>
        <TouchableOpacity style={apply('px-4 py-2 border-2 border-grey-dark rounded mx-2 items-center')}>
          <Text style={apply('text-grey-dark')}>Button 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={apply('px-4 py-2 border-2 border-blue rounded mx-2 items-center')}>
          <Text style={apply('text-blue')}>Button 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={apply('px-4 py-2 border-2 border-purple rounded mx-2 items-center')}>
          <Text style={apply('text-purple')}>Button 2</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Button3 = (props) => {
  return (
    <View style={apply('items-center m-2')}>
      <Text style={apply('text-base mb-2')}>Border Button</Text>
      <View style={apply('flex-row')}>
        <TouchableOpacity style={apply('px-4 py-2 bg-grey-dark border-grey-darker border-2 rounded mx-2 items-center')}>
          <Text style={apply('text-white')}>Button 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={apply('px-4 py-2 bg-blue border-blue-dark border-2 rounded mx-2 items-center')}>
          <Text style={apply('text-white')}>Button 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={apply('px-4 py-2 bg-purple border-purple-dark border-2 rounded mx-2 items-center')}>
          <Text style={apply('text-white')}>Button 3</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Button4 = (props) => {
  return (
    <View style={apply('items-center m-2')}>
      <Text style={apply('text-base mb-2')}>Disable</Text>
      <View style={apply('flex-row')}>
        <TouchableOpacity style={apply('px-4 py-2 bg-grey-dark border-2 border-grey-darker rounded mx-2 items-center opacity-50')}>
          <Text style={apply('text-white')}>Button 4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={apply('px-4 py-2 bg-blue border-2 border-blue-dark rounded mx-2 items-center opacity-50')}>
          <Text style={apply('text-white')}>Button 4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={apply('px-4 py-2 bg-purple border-2 border-purple-dark rounded mx-2 items-center opacity-50')}>
          <Text style={apply('text-white')}>Button 4</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Button5 = (props) => {
  return (
    <View style={apply('items-center m-2')}>
      <Text style={apply('text-base mb-2')}>3D</Text>
      <View style={apply('flex-row')}>
        <TouchableOpacity style={apply('px-4 py-2 bg-grey-dark border-b-4 border-grey-darker rounded mx-2 items-center')}>
          <Text style={apply('text-white')}>Button 5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={apply('px-4 py-2 bg-blue border-b-4 border-blue-dark rounded mx-2 items-center')}>
          <Text style={apply('text-white')}>Button 5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={apply('px-4 py-2 bg-purple border-b-4 border-purple-dark rounded mx-2 items-center')}>
          <Text style={apply('text-white')}>Button 5</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default class Buttons extends React.Component {
  render() {
    return (
      <View style={apply('flex-1 justify-center items-center mt-4')}>
        <Button1 />
        <Button2 />
        <Button3 />
        <Button4 />
        <Button5 />
      </View>
    );
  }
}