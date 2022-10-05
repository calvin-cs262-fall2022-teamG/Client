import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { FC, ReactElement, useState } from "react";
import { TouchableOpacity, Text, View, FlatList, SectionList, SafeAreaView, Image, } from 'react-native';

import { globalStyles } from '../styles/globalStyles';
import { LoginStyle } from '../styles/globalStyles';
import { homeStyle } from '../styles/globalStyles';
import { menuSelectionStyle } from '../styles/globalStyles';
import { SECTIONS } from '../database/menudata';

const fontStyles = ["normal", "italic"];

// create
export default function MenuSelectionScreen({ navigation }) {
  const ListItem = ({ item }) => {
    return (
      <View style={menuSelectionStyle.item}>
        <TouchableOpacity style
          onPress={() => {
            navigation.navigate('customize');
  
          }}>
          <Image
            source={{
              uri: item.uri,
            }}
            style={menuSelectionStyle.itemPhoto}
            resizeMode="cover"
          />
        </TouchableOpacity>
  
        <Text style={menuSelectionStyle.itemText}>{item.text}</Text>
      </View>
    );
  };
  return (
    <View style={menuSelectionStyle.container}>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={menuSelectionStyle.sectionHeader}>{section.title}</Text>
              {section.horizontal ? (
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({ item }) => <ListItem item={item} />}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return <ListItem item={item} />;
          }}
        />

      </SafeAreaView>
    </View>
  );
};
