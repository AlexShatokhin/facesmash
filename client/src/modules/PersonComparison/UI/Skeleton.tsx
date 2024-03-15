import "react-native-reanimated"
import { FC } from "react"
import { Pressable } from "react-native"
import {MotiView} from "moti"
import {Skeleton} from "moti/skeleton"

const SkeletonComponent : FC<any> = (props) => {
	return (
			<Pressable {...props}>
				<MotiView
					animate={{ backgroundColor: '#FFFFFF'}}>
					<Skeleton
						colors={["#c8c8c8", "#808080", "#666666"]} 
						radius = {10} 
						height={260} 
						width={170} 
						transition={{
							type: "timing",
							duration: 30000
						}}/>
				</MotiView>
			</Pressable>
		);
}

export default SkeletonComponent;