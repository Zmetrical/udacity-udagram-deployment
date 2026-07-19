#!/bin/bash
set -e

aws s3 cp --recursive ./www s3://$AWS_BUCKET/
