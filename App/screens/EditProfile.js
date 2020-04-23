import React from 'react';
import {View, Text} from 'react-native';

// TODO Implement Firebase into this page
// TODO import Firebase from '../config/Firebase';

import {Fumi} from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AwesomeButton from 'react-native-really-awesome-button';

import styles from '../styles/Styles';
import colors from '../styles/Colors';

class EditProfile extends React.Component {
    state = {
      name: '',
      email: '',
      password: '',
      error: ''
    };


    render() {
      return (
        <View
          style={styles.container}>

          <Text
            style={[styles.header, styles.text_large]}>
          </Text>

          <Fumi
            label={'Full Name'}
            value={this.state.name}
            iconClass={FontAwesomeIcon}
            iconName={'user'}
            onChangeText={(name) => this.setState({name})}
          />

          <Fumi
            label={'Email'}
            value={this.state.email}
            autoCapitalize="none"
            iconClass={FontAwesomeIcon}
            iconName={'envelope-square'}
            onChangeText={(email) => this.setState({email})}
          />

          <Fumi
            label={'Password'}
            value={this.state.password}
            secureTextEntry={true}
            iconClass={FontAwesomeIcon}
            iconName={'unlock-alt'}
            onChangeText={(password) => this.setState({password})}
          />

          <Fumi
            label={'Confirm Password'}
            value = {this.state.confirmPassword}
            secureTextEntry={true}
            iconClass={FontAwesomeIcon}
            iconName={'lock'}
            onChangeText={(confirmPassword) => this.setState({confirmPassword})}
          />
          <Fumi
            label={'Phone-Number'}
            iconClass={FontAwesomeIcon}
            iconName={'phone'}
            iconSize={20}
            iconWidth={40}
            inputPadding={16}
            inputStyle={{padding: 5}}
          />

          <Fumi
            label={'Birthday'}
            iconClass={FontAwesomeIcon}
            iconName={'birthday-cake'}
            iconSize={20}
            iconWidth={40}
            inputPadding={16}
            inputStyle={{padding: 5}}
          />

          <Fumi
            label={'Short BIO'}
            iconClass={FontAwesomeIcon}
            iconName={'pencil'}
            iconSize={20}
            iconWidth={40}
            inputPadding={16}
            inputStyle={{padding: 5}}
          />

          <Fumi
            label={'Photo of Yourself :)'}
            iconClass={FontAwesomeIcon}
            iconName={'camera'}
            iconSize={20}
            iconWidth={40}
            inputPadding={16}
            inputStyle={{padding: 5}}
          />

          <Fumi
            label={'Some Places You\'ve Been'}
            iconClass={FontAwesomeIcon}
            iconName={'location-arrow'}
            iconSize={20}
            iconWidth={40}
            inputPadding={16}
            inputStyle={{padding: 5}}
          />

          <View
            style={{alignItems: 'center'}}
          >

            <Text
              style={styles.text_error}
            >
              {this.state.error}
            </Text>

          </View>

          <View style={styles.container_content}>

            <AwesomeButton
              backgroundColor={colors.warning}
              width={200}
              height={50}
              onPress={
                () => {
                  this.props.navigation.navigate('Tabs', {
                    screen: 'ProfileTab'
                  });
                }
              }
            >
                        Submit
            </AwesomeButton>

          </View>

        </View>
      );
    }
}

export default EditProfile;
