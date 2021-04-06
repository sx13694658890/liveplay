import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import './index.less'
import { getStore, setStore } from "../../utils"
import AddQuestion from "./AddQuestion"
export default class Index extends Component {
  state = {
    showQuestionModel: false,
    questionList: getStore("questionList")
  }
  // 提问显示
  handlerCLick = () => {
    this.setState({
      showQuestionModel: true,
    })
  }
  //取消提问
  closeQuestion = () => {
    this.setState({
      showQuestionModel: false
    })
  }
  receiveQuestion = (options) => {
    let { questionList } = this.state
    questionList.unshift({ id: parseInt(Math.random() * 1000), ...options })
    this.setState({
      questionList
    }, () => {
      setStore("questionList", questionList)
    })
    this.closeQuestion()
  }
  addVote = (item) => {
    let { questionList } = this.state
    if (item) {
      item.vote = item.vote ? (item.vote + 1) : 1
    }
    let newList = questionList.map(itemQuestion => {
      if (item.id == itemQuestion.id) {
        itemQuestion = { ...item }
      }
      return itemQuestion
    })
    this.setState({
      questionList: newList
    }, () => {
      setStore("questionList", newList)
    })
  }
  cutVote = (item) => {
   
    let { questionList } = this.state
    if (item) {
      item.vote = item.vote ? ((item.vote-1)>0?(item.vote-1):0): 0
    }
    let newList = questionList.map(itemQuestion => {
      if (item.id == itemQuestion.id) {
        itemQuestion = { ...item }
      }
      return itemQuestion
    })
    this.setState({
      questionList: newList
    }, () => {
      setStore("questionList", newList)
    })
  }
  render() {
    let { showQuestionModel,questionList } = this.state
    let myList=questionList.sort((a,b)=>b.vote-a.vote)
    return (
      <View className='index'>
        <View className="title">Hello world!</View>
        <View className="question-list">
          {
            myList.map((item, index) => {
              return (
                <View className="question" key={index}>
                  <View className="question-about">
                    <View className="question-title">{item.title}</View>
                    <View className="question-des">{item.des}</View>
                  </View>
                  <View>
                    <Text onClick={() => { this.addVote(item) }}>Yes</Text>
                    <Text>{item.vote ? item.vote : 0}</Text>
                    <Text onClick={() => { this.cutVote(item) }}>No</Text>
                  </View>
                </View>
              )
            })
          }
        </View>
        {showQuestionModel ? <AddQuestion receiveQuestion={this.receiveQuestion} closeQuestion={this.closeQuestion}></AddQuestion> : ""}
        <Button className="btn-question" onClick={this.handlerCLick}>提问</Button>
      </View>
    )
  }
}
