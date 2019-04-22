import React from "react";
import { Grid, TextField } from "@material-ui/core";

interface IState {
    text: string;
    speed: string;
}

export default class App extends React.Component<{}, IState> {
    
    private lastDigit?: number;

    constructor(props: {}) {
        super(props);

        this.state = {
            text: "",
            speed: "",
        }
    }

    public render() {
        return (
            <Grid
                container={true}
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
            >
                <Grid item={true}>
                    <TextField label="type here" value={this.state.text} onChange={this.onTextChange} />
                </Grid>

                <Grid item={true}>
                    digit speed (ms) : {this.state.speed}
                </Grid>

            </Grid>
        );
    }

    private onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ text: e.target.value });

        const nowTime = new Date().getTime();

        let diff = 0;

        if (this.lastDigit) {
            diff = nowTime - this.lastDigit;
        }

        this.setState({ speed: String(diff) });        

        this.lastDigit = nowTime;
    }

}
