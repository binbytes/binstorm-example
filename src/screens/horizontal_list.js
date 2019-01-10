import * as React from 'react';
import { Text, View, FlatList } from 'react-native';

import {apply} from '../../theme/styles'


const Card = props => {
  return (
    <View
      style={[
        apply('h-64 w-64 border rounded m-4 shadow-lg'),
        apply(`bg-${props.color}`)
      ]}
    >
      <Text style={apply('text-3xl text-white font-bold m-4')}>
        {props.day}
      </Text>
      <Text style={apply('text-right text-white px-4')}>8 Jan 2018</Text>
      <Text style={apply('text-white italic absolute pin-b p-4')}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac purus
        tincidunt, faucibus diam et, euismod velit. Nunc at nunc ut odio tempus
        facilisis vitae a risus. Fusce laoreet ipsum vel viverra hendrerit.
      </Text>
    </View>
  )
}


export default class HorizontalList extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      data: [
        {
          day: 'Sunday',
          color: 'red-light'
        },
        {
          day: 'Monday',
          color: 'green-light'
        },
        {
          day: 'Tuesday',
          color: 'teal-light'
        },
        {
          day: 'Wensday',
          color: 'blue-light'
        },
        {
          day: 'Thursday',
          color: 'indigo-light'
        },
        {
          day: 'Friday',
          color: 'purple-light'
        },
        {
          day: 'Saturday',
          color: 'pink-light'
        }
      ]
    }
  }

  render() {
    return (
      <View style={apply('flex-1 justify-center')}>
        <View style={apply('h-1/2 pt-10')}>
          <FlatList
            data={this.state.data}
            horizontal={true}
            style={apply('p-2')}
            contentContainerStyle={apply('justify-center items-center')}
            renderItem={({ item }) => <Card day={item.day} color={item.color} />}
            keyExtractor={(item, index) => `${index}`}
          />
        </View>
      </View>
    )
  }
}
