import * as React from 'react';
import { Text, View, Image } from 'react-native';

import {apply} from '../../theme/styles'

export default class Card extends React.Component {
  render() {
    return (
      <View style={apply('flex-1 justify-center items-center')}>
        <View style={apply('bg-white shadow-md w-3/4')}>
          <Image
            source={require('../../img/image.png')}
            style={apply('h-48 w-full')}
            resizeMode={'cover'}
          />
          <View style={apply('px-6 py-4')}>
            <Text style={apply('font-bold text-xl mb-2')}>Hello World</Text>
            <Text style={apply('text-grey-darker text-base text-justify mt-2')}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              suscipit lectus at risus suscipit. Sed sagittis ultricies libero, id
              volutpat magna tempus nec.
            </Text>
          </View>
          <View style={apply('flex-row p-4')}>
            <View style={apply('bg-grey-lighter rounded-full px-4 py-2 mx-2')}>
              <Text style={apply('font-bold text-xs text-grey-darker')}>
                # Tag
              </Text>
            </View>
            <View style={apply('bg-grey-lighter rounded-full px-4 py-2 mx-2')}>
              <Text style={apply('font-bold text-xs text-grey-darker')}>
                # Tag
              </Text>
            </View>
            <View style={apply('bg-grey-lighter rounded-full px-4 py-2 mx-2')}>
              <Text style={apply('font-bold text-xs text-grey-darker')}>
                # Tag
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
