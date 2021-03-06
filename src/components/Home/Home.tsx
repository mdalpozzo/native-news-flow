import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    FlatList,
    Image
} from 'react-native';
import DefaultLayout from 'Components/DefaultLayout';
import styles from './Home.styles';
import StoryFeedItem from 'Components/StoryFeedItem';
import { Stories, Story, NestedState, ActionTypes } from 'Components/Main';
import { connect } from 'react-redux';
import { selectStories } from 'Components/Main/Main.selectors';
import { ThunkDispatch } from 'redux-thunk';
import { bindActionCreators } from 'redux';

interface Props {
    stories: Stories;
};

class Home extends Component<Props> {
    render () {
        const {
            stories,
        } = this.props as Props;
        let mainStory: Story;
        let mainStoryComponent;
        if (stories[1]) {
            mainStory = stories[1];
            mainStoryComponent = (
                <View style={styles.Headline}>
                    <Image style={styles.MainImage} source={{uri: mainStory.urlToImage}} />
                    <View style={styles.MainText}>
                        <Text style={styles.MainTextTitle}>{mainStory.title}</Text>
                    </View>
                </View>
            );
        }
        return (
            <DefaultLayout>
                {mainStoryComponent}
                <View style={styles.Stories}>
                    <FlatList
                        data={stories}
                        renderItem={({item}) => <StoryFeedItem
                            story={item}
                        />}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </DefaultLayout>
        );
    }
}

const mapStateToProps = (state: NestedState) => ({
    stories: selectStories(state),
});

const mapDispatchToProps = (dispatch: ThunkDispatch<NestedState, void, ActionTypes>) => bindActionCreators({
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);

export {
    Home,
};