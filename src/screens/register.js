import * as React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';

import {apply} from '../../theme/styles'

export default class Register extends React.Component {
  render() {
    return (
      <View style={apply('flex-1 bg-white justify-center')}>
        <View style={apply('p-8 bg-white')}>
          <View>
            <Text style={apply('text-2xl text-blue font-bold')}>Create{'\n'}your account</Text>
            <Text style={apply('text-base text-grey-dark mt-4')}>
              Enter you personal deatils and{'\n'}start your journey today.
            </Text>
          </View>
          <View style={apply('mt-10')}>
            <View>
              <Text style={apply('text-sm text-grey-darker mb-px')}>
                Your email
              </Text>
              <TextInput
                style={apply('border-b border-teal-light py-1 text-sm')}
                underlineColorAndroid={'transparent'}
                value={'info@binbytes.com'}
              />
            </View>
            <View style={apply('mt-8')}>
              <Text style={apply('text-sm text-grey-darker mb-px')}>
                Create password
              </Text>
              <TextInput
                style={apply('border-b border-teal-light py-1 text-sm')}
                underlineColorAndroid={'transparent'}
                value={'123456789'}
                secureTextEntry={true}
              />
            </View>
          </View>
          <View style={apply('mt-8 items-center')}>
            <TouchableOpacity
              style={apply('bg-blue items-center rounded-lg py-4 w-full')}
            >
              <Text style={apply('text-white font-bold')}>Create Account</Text>
            </TouchableOpacity>
            <Text style={apply('text-grey-dark mt-8')}>- OR -</Text>
            <View style={apply('flex-row mt-8')}>
              <Text style={apply('text-grey-dark')}>Already have account?</Text>
              <TouchableOpacity>
                <Text style={apply('text-blue font-bold')}> Login </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
