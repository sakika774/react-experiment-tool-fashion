package main

import (
    "math/rand"
    "strconv"
    "time"

    "github.com/gin-gonic/gin"
    "github.com/gin-contrib/cors"
)

func main() {
    r := gin.Default()
    r.Use(cors.Default())

    // 動作確認用
    r.GET("/ping", func(c *gin.Context) {
        c.JSON(200, gin.H{"message": "pong"})
    })

    // 参加者ID生成 API
    r.GET("/participant", func(c *gin.Context) {
        rand.Seed(time.Now().UnixNano())
        participantID := "p" + strconv.Itoa(rand.Intn(100000))
        c.JSON(200, gin.H{"participant_id": participantID})
    })

    r.Run(":8080")
}