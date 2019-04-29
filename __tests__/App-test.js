/**
 * @format
 */
/* global expect it */
import "react-native";
import React from "react";
import Home from "../src/scenes/home/Home.js";
import List from "../src/components/list/List.js";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

it("renders correctly", () => {
  renderer.create(<Home />);
});

it("renders a List correctly", () => {
  const list = renderer.create(<List />);
  expect(list).toMatchInlineSnapshot(`
        <View
          styles={
            Object {
              "alignItems": "center",
              "flex": 1,
              "justifyContent": "center",
              "marginTop": 50,
            }
          }
        >
          <Text />
          <View
            style={
              Object {
                "flexDirection": "row",
                "justifyContent": "space-between",
                "paddingHorizontal": 20,
                "width": 750,
              }
            }
          >
            <TextInput
              allowFontScaling={true}
              onChangeText={[Function]}
              placeholder="What would you like to watch?"
              placeholderTextColor="darkgrey"
              rejectResponderTermination={true}
              style={
                Object {
                  "borderColor": "grey",
                  "borderRadius": 5,
                  "borderWidth": 2,
                  "maxHeight": 30,
                  "minHeight": 30,
                  "paddingLeft": 5,
                  "width": 590,
                }
              }
              underlineColorAndroid="transparent"
              value=""
            />
            <View
              accessible={true}
              isTVSelectable={true}
              onResponderGrant={[Function]}
              onResponderMove={[Function]}
              onResponderRelease={[Function]}
              onResponderTerminate={[Function]}
              onResponderTerminationRequest={[Function]}
              onStartShouldSetResponder={[Function]}
              style={
                Object {
                  "backgroundColor": "blue",
                  "borderRadius": 5,
                  "height": 30,
                  "opacity": 1,
                  "width": 100,
                }
              }
            >
              <Text
                style={
                  Object {
                    "color": "white",
                    "fontSize": 16,
                    "fontWeight": "bold",
                    "marginTop": 5,
                    "textAlign": "center",
                  }
                }
              >
                Search
              </Text>
            </View>
          </View>
          <Image
            source={
              Object {
                "testUri": "../../../src/components/img/watchingTV.jpeg",
              }
            }
            style={
              Object {
                "marginTop": 100,
                "position": "absolute",
                "width": 750,
              }
            }
          />
          <View
            style={
              Object {
                "alignSelf": "flex-end",
                "height": 350,
                "width": 265,
              }
            }
          >
            <RCTScrollView
              data={Array []}
              disableVirtualization={false}
              getItem={[Function]}
              getItemCount={[Function]}
              horizontal={true}
              initialNumToRender={10}
              keyExtractor={[Function]}
              maxToRenderPerBatch={10}
              numColumns={1}
              onContentSizeChange={[Function]}
              onEndReachedThreshold={2}
              onLayout={[Function]}
              onMomentumScrollEnd={[Function]}
              onScroll={[Function]}
              onScrollBeginDrag={[Function]}
              onScrollEndDrag={[Function]}
              removeClippedSubviews={false}
              renderItem={[Function]}
              scrollEventThrottle={50}
              stickyHeaderIndices={Array []}
              updateCellsBatchingPeriod={50}
              viewabilityConfigCallbackPairs={Array []}
              windowSize={21}
            >
              <View />
            </RCTScrollView>
          </View>
        </View>
    `);
});

it("renders an SeasonPicker correctly", () => {
  const episode = renderer.create("<SeasonPicker />");
  expect(episode).toMatchInlineSnapshot
});
