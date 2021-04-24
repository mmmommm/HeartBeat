#!/bin/bash
go install github.com/skeema/skeema

# DB_PASSをsecret.yamlからとってくる
export DB_PASS=$(grep '\s*DB_PASS:' secret.yaml | awk '{print $2}')

cd /mysql
# データベース名に環境のsuffixをつける
sed -i "s/^schema=heart_beat$/schema=heart_beat/" ./schemas/heart_beat/.skeema
$GOPATH/bin/skeema push -p"${DB_PASS}" prod

go run main.go
echo "おわり"