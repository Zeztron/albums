import React from 'react';
import { Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album: { title , artist } }) => {
	const { headerContentStyle } = styles;

	return (
		<Card>
			<CardSection>
				<View></View>
				<View style={headerContentStyle}>
					<Text>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>
		</Card>
  	);
};

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	}
};

export default AlbumDetail;
